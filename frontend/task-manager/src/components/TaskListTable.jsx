import React from "react";
import moment from "moment";

const TaskListTable = ({ tableData }) => {
  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "Completed": return 'bg-green-100 text-green-500 border border-green-200';
      case "Pending": return 'bg-purple-100 text-purple-500 border border-purple-200';
      case "In Progress": return 'bg-cyan-100 text-cyan-500 border border-cyan-200';
      default: return 'bg-gray-100 text-gray-500 border border-gray-200';
    }
  };

  const getPriorityBadgeColor = (priority) => {
    switch (priority) {
      case "High": return 'bg-red-100 text-red-500 border border-red-200';
      case "Medium": return 'bg-orange-100 text-orange-500 border border-orange-200';
      case "Low": return 'bg-green-100 text-green-500 border border-green-200';
      default: return 'bg-gray-100 text-gray-500 border border-gray-200';
    }
  };

  return (
    <div className="overflow-x-auto p-0 rounded-lg mt-3">
      <table className="min-w-full text-sm">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Task</th>
            <th className="px-4 py-2 text-left">Due Date</th>
            <th className="px-4 py-2 text-left">Priority</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData && tableData.length > 0 ? (
            tableData.map((task, idx) => (
              <tr key={task._id || idx}>
                <td className="px-4 py-2">{task.title}</td>
                <td className="px-4 py-2">{moment(task.dueDate).format("DD MMM YYYY")}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded ${getPriorityBadgeColor(task.priority)}`}>
                    {task.priority}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded ${getStatusBadgeColor(task.status)}`}>
                    {task.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="px-4 py-2" colSpan={4}>No tasks found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskListTable;
