import { ChevronRight } from "lucide-react";
import { Card } from "../card";
import iconReplies from "../../assets/icon-replies.svg";
import avatar1 from "../../assets/avatar-1.png";
import avatar2 from "../../assets/avatar-2.png";
import avatar3 from "../../assets/avatar-3.png";
import avatar4 from "../../assets/avatar-4.png";

const avatars = [avatar1, avatar2, avatar3, avatar4];

export const RepliesCard = () => (
  <Card className="p-4 h-full flex flex-col gap-2">
    <div className="flex items-center justify-between">
      <span className="text-sm font-semibold text-gray-700">Replies</span>
      <button className="text-xs text-[#00C896] font-medium flex items-center gap-0.5 hover:underline">
        Open inbox <ChevronRight size={14} />
      </button>
    </div>
    <div className="flex-1 bg-[#E6FAF5] rounded-xl px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={iconReplies} alt="Replies" className="w-12 h-12 flex-shrink-0" />
        <span className="text-4xl font-bold text-gray-900 leading-none">24</span>
      </div>
      <div className="flex -space-x-2">
        {avatars.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Avatar ${i + 1}`}
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
          />
        ))}
      </div>
    </div>
  </Card>
);
