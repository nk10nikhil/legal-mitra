import { Building2, Gavel, Landmark, Scale, ShieldUser, UserRound } from "lucide-react";

const userIcons = [UserRound, Scale, Gavel, ShieldUser, Building2, Landmark];

type UsersGridProps = {
  users: string[];
};

export function UsersGrid({ users }: UsersGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
      {users.map((user, index) => {
        const Icon = userIcons[index] ?? UserRound;
        return (
          <div key={user} className="rounded-xl border bg-card/75 p-4 text-center">
            <Icon className="mx-auto mb-2 h-5 w-5 text-primary" />
            <p className="text-sm font-medium">{user}</p>
          </div>
        );
      })}
    </div>
  );
}
