import React from "react";
import useOwnerProject from "./useOwnerProject";
import Loading from "../../UI/Loading";
import Empty from "../../UI/Empty";
import truncateText from "../../utils/truncateText";
import { toPersianNumbersWithComma } from "../../utils/ToPersianNumbers";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProject();

  if (isLoading) return <Loading />;

  if (!projects.length) return <Empty resourceName="پروژه" />;
  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th> دسته بندی </th>
            <th> بودجه </th>
            <th> ددلاین </th>
            <th> تگ ها </th>
            <th> فریلنسر </th>
            <th> وضعیت </th>
            <th> عملیلت </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project._id}>
              <td>{index + 1}</td>
              <td>{truncateText(project.title, 30)}</td>
              <td>{project.category.title}</td>
              <td>{toPersianNumbersWithComma(project.budget)}</td>
              <td>{new Date(project.deadline).toLocaleString("fa-IR")}</td>
              <td>
                <div className="flex flex-wrap items-center gap-2 ma">
                  {project.tags.map((tag) => (
                    <span className="badge badge--secondary" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td>{project.freelancer?.name || "-"}</td>
              <td>
                {project.status == "OPEN" ? (
                  <span className="badge badge--success">باز</span>
                ) : (
                  <span className="badge badge--danger">بسته</span>
                )}
              </td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTable;
