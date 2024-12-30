export default {
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule:any) => Rule.required().min(10).max(80),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 100,
        },
        validation: (Rule:any) => Rule.required(),
      },
      {
        name: 'shortDescription',
        title: 'Short Description',
        type: 'text',
        validation: (Rule:any) =>
          Rule.required().custom((value:string) => {
            if (!value) return 'Short description is required.';
            const wordCount = value.split(/\s+/).length; // Split by spaces
            if (wordCount > 20) return 'Short description must not exceed 20 words.';
            return true;
          }),
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{ type: 'block' }],
        validation: (Rule:any) => Rule.required(),
      },
      {
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime',
      },
    ],
  };
  