// schemas/blogPost.js
export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: (new Date()).toISOString(),
      validation: Rule => Rule.required()
    },
    {
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      description: 'e.g. "5 min read"',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Analytical Techniques', value: 'Environmental Sustainability'},
          {title: 'Sustainable Science', value: 'Climate change'},
          {title: 'Research Methodology', value: 'Research Methodology'},
          {title: 'Environmental Chemistry', value: 'Analytical and Environmental Chemistry'}
          
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alternative Text',
              type: 'string'
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      category: 'category'
    },
    prepare(selection) {
      const {title, media, category} = selection
      return {
        title,
        media,
        subtitle: category
      }
    }
  }
}