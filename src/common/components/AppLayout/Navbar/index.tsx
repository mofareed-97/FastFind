import {
  Navbar,
  Link,
  Text,
  Avatar,
  Dropdown,
  Container,
  Input,
} from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";

export default function AppNavbar() {
  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar maxWidth="fluid" variant="sticky">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        {/* <AcmeLogo /> */}
        <Text b color="inherit" hideIn="xs">
          FastFind
        </Text>
        <Navbar.Content
          enableCursorHighlight
          activeColor="primary"
          hideIn="xs"
          variant="highlight"
          css={{ ml: 50 }}
        >
          <Navbar.Link href="/">Features</Navbar.Link>
          <Navbar.Link isActive href="/">
            Customers
          </Navbar.Link>
          <Navbar.Link href="/">Pricing</Navbar.Link>
          <Navbar.Link href="/">Company</Navbar.Link>
        </Navbar.Content>
      </Navbar.Brand>

      <Navbar.Content
        css={{
          "@xs": {
            // w: "12%",
            jc: "flex-end",
          },
        }}
      >
        <Input
          clearable
          contentLeft={
            <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
          }
          contentLeftStyling={false}
          css={{
            w: "100%",
            "@xsMax": {
              mw: "300px",
            },
            "& .nextui-input-content--left": {
              h: "100%",
              ml: "$4",
              dflex: "center",
            },
          }}
          label=" "
          placeholder="Search..."
        />
        <Dropdown placement="bottom-right">
          <Navbar.Item>
            <Dropdown.Trigger>
              <Avatar
                bordered
                as="button"
                color="primary"
                size="md"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </Dropdown.Trigger>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="User menu actions"
            color="primary"
            onAction={(actionKey) => console.log({ actionKey })}
          >
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                Signed in as
              </Text>
              <Text b color="inherit" css={{ d: "flex" }}>
                zoey@example.com
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
              My Settings
            </Dropdown.Item>
            <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
            <Dropdown.Item key="analytics" withDivider>
              Analytics
            </Dropdown.Item>
            <Dropdown.Item key="system">System</Dropdown.Item>
            <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
            <Dropdown.Item key="help_and_feedback" withDivider>
              Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item key="logout" withDivider color="error">
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
      <Navbar.Collapse disableAnimation>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="primary"
            css={{
              color: index === collapseItems.length - 1 ? "$error" : "",
            }}
            isActive={index === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
