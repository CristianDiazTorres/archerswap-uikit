import React from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { SvgProps } from "../../../components/Svg";
import * as IconModule from "../icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "../types";
import { Tag } from "../../../components/Tag";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`;
const StyledTag = styled(Tag)<any>`
  font-size: 12px;
  font-weight: 600;
  justify-content: center;
  background: linear-gradient(265.22deg, rgba(237, 149, 46, 0.12) 0%, rgba(247, 206, 71, 0.12) 100%);
  border-radius: 8px;

  div {
    padding: 2px 12px;
    background: linear-gradient(265.22deg, #ed952e 0%, #f7ce47 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container>
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="18px" mr="16px" />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname);
          const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;

          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              initialOpenState={initialOpenState}
              className={calloutClass}
              isActive={entry.items.some((item) => item.href === location.pathname) && !isPushed}
            >
              {isPushed &&
                entry.items.map((item) => (
                  <MenuEntry key={item.href} secondary isActive={false} onClick={handleClick}>
                    <MenuLink href={item.href} target={item.target}>
                      {item.label}
                    </MenuLink>
                  </MenuEntry>
                ))}
            </Accordion>
          );
        }
        return (
          <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
            <MenuLink href={entry.href} onClick={handleClick} target={entry.target}>
              {iconElement}
              <LinkLabel isPushed={isPushed} isActive={entry.href === location.pathname}>
                {entry.label}
              </LinkLabel>
              {entry.tag && (
                <StyledTag tag={entry.tag}>
                  <div>{entry.tag}</div>
                </StyledTag>
              )}
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
  );
};

export default PanelBody;
