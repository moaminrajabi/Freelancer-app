import React from "react";
import useOwnerProject from "./useOwnerProject";
import Loading from "../../UI/Loading";
import Empty from "../../UI/Empty";
import truncateText from "../../utils/truncateText";
import { toPersianNumbersWithComma } from "../../utils/ToPersianNumbers";
import Table from "../../UI/TableUI";
import ProjectRow from "./ProjectRow";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProject();

  if (isLoading) return <Loading />;

  if (!projects.length) return <Empty resourceName="پروژه" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th> دسته بندی </th>
        <th> بودجه </th>
        <th> ددلاین </th>
        <th> تگ ها </th>
        <th> فریلنسر </th>
        <th> وضعیت </th>
        <th> عملیلت </th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectTable;
