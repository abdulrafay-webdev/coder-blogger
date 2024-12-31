export default {
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "email", title: "Email", type: "string" },
    { name: "text", title: "Comment", type: "text" },
    {
      name: "post",
      title: "Post",
      type: "reference",
      to: [{ type: "blogPost" }],
    },
  ],
};
