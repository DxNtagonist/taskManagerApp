import React from "react";
import Progress from "../Progress";
import { LuPaperclip, LuUsers } from "react-icons/lu";
import moment from "moment";

const TaskCard = ({
    title,
    description,
    priority,
    status,
    progress,
    createdAt,
    dueDate,
    assignedTo = [],
    attachmentCount,
    completedTodoCount,
    todoCheckList,
    onClick,
}) => {
    const getStatusTagColor = () => {
        switch (status) {
            case "In Progress":
                return "text-cyan-500 bg-cyan-50 border border-cyan-500/10";
            case "Completed":
                return "text-lime-500 bg-lime-50 border-lime-500/20";
            default:
                return "text-violet-500 bg-violet-50 border border-violet-500/10";
        }
    };

    const getPriorityTagColor = () => {
        switch (priority) {
            case "Low":
                return "text-emerald-500 bg-emerald-50 border border-emerald-500/10";
            case "Medium":
                return "text-amber-500 bg-amber-50 border border-amber-500/10";
            default:
                return "text-rose-500 bg-rose-50 border border-rose-500/10";
        }
    };

    return (
        <div className="p-4 rounded-lg shadow bg-white cursor-pointer" onClick={onClick}>
            <div className="flex gap-2 mb-2">
                <span className={`text-[11px] font-medium px-4 py-0.5 rounded-full ${getStatusTagColor()}`}>
                    {status}
                </span>
                <span className={`text-[11px] font-medium px-4 py-0.5 rounded-full ${getPriorityTagColor()}`}>
                    {priority} Priority
                </span>
            </div>

            <div
                className={`px-4 border-l-[3px] mb-2 ${status === "In Progress"
                    ? "border-cyan-500"
                    : status === "Completed"
                        ? "border-lime-500"
                        : "border-violet-500"
                    }`}
            >
                <p className="font-semibold text-base">{title}</p>
                <p className="text-sm text-gray-600 mb-2">{description}</p>
                <p className="text-xs text-gray-500 mb-1">
                    Task Done:{" "}
                    <span className="font-semibold">
                        {completedTodoCount} / {todoCheckList?.length || 0}
                    </span>
                </p>
                <Progress progress={progress} status={status} />
            </div>

            <div className="flex items-center justify-between mt-2">
                <div>
                    <label className="block text-xs text-gray-400">Due Date</label>
                    <p className="text-xs text-gray-700">
                        {moment(dueDate).format("Do MMM YYYY")}
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    {/* Just the Members label and icon, no hover */}
                    <div className="flex items-center gap-1 text-gray-500">
                        <LuUsers className="text-lg" />
                        <span className="text-xs">Members</span>
                    </div>

                    {attachmentCount > 0 && (
                        <div className="flex items-center gap-1 text-gray-500">
                            <LuPaperclip className="text-lg" />
                            <span className="text-xs">{attachmentCount}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
