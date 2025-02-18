export interface NavLinksType {
  navitem: string;
  subMenus?: { menu: string; link: string }[];
  link: string;
}

export const NavLinks = [
  {
    navitem: "SPEAKERS",
    link: "speaker",
  },

  {
    navitem: "LOCATION",
    link: "location",
  },
  {
    navitem: "BLOG",
    link: "/blog",
  },
  {
    navitem: "CONTACT US",
    link: "contactus",
  },
];
export const MobileNavLinks = [
  {
    navitem: " LAGOS SPEAKERS",
    link: "/lagos-speaker",
  },
  {
    navitem: " ABUJA SPEAKERS",
    link: "/abuja-speaker",
  },
  {
    navitem: " BLOG",
    link: "/blog",
  },
  {
    navitem: "LOCATION",
    link: "#location",
  },
  {
    navitem: "CONTACT US",
    link: "#location",
  },
  {
    navitem: "Register As Attendee",
    link: "#attendee",
  },
  {
    navitem: "Secure Your Booth",
    link: "#vendor",
  },
];
export const LoginData = [
  {
    navitem: "Login",
    subMenus: [
      { menu: "For Talent", link: "/talent-login" },
      { menu: "For Company", link: "/company-login" },
    ],
    link: "",
  },
];
