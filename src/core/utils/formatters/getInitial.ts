export function getInitials(name: string): string {
  const nameParts = name.split(/[\s-]+/);
  const initials = nameParts.map((part) => part.charAt(0)).join("");
  return initials.toUpperCase();
}
