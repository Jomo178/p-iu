import ProfileAvatar from "./ui/profile-avatar";

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  return (
    <nav className="container flex flex-row justify-between @container">
      <ProfileAvatar
        src="https://api.dicebear.com/9.x/adventurer/svg?seed=Jade"
        alt="IU"
        name="IU"
        size="md"
      />

      <ProfileAvatar
        src="https://api.dicebear.com/9.x/adventurer/svg?seed=Jade"
        alt="shadmehr._.7"
        name="shadmehr._.7"
        size="md"
        reverse
      />
    </nav>
  );
}
