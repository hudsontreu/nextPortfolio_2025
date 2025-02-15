import {defineType, defineArrayMember} from 'sanity'

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'Add a caption to display below the image (optional)',
        }
      ]
    }),
    defineArrayMember({
      title: 'Video',
      name: 'video',
      type: 'object',
      description: 'Add video content via URL or file upload. For best compatibility: 1) Use YouTube/Vimeo links when possible, or 2) Upload MP4 files. While MOV files are supported, they may not play in all browsers.',
      fields: [
        {
          title: 'Video URL',
          name: 'url',
          type: 'url',
          description: 'Paste a YouTube or Vimeo URL. This is the recommended method for better performance and compatibility.'
        },
        {
          title: 'Video File',
          name: 'file',
          type: 'file',
          description: 'Upload a video file. Recommended format: MP4 (H.264). MOV files are supported but may have limited browser compatibility.',
          options: {
            accept: 'video/*'
          }
        },
        {
          title: 'Caption',
          name: 'caption',
          type: 'string',
          description: 'Add a caption to describe the video (optional)'
        },
        {
          title: 'Auto Loop',
          name: 'loop',
          type: 'boolean',
          description: 'Video will play continuously on loop',
          initialValue: false
        },
        {
          title: 'Autoplay',
          name: 'autoplay',
          type: 'boolean',
          description: 'Video will play automatically when loaded (must be muted)',
          initialValue: false
        },
        {
          title: 'Hide Controls',
          name: 'hideControls',
          type: 'boolean',
          description: 'Hide video playback controls',
          initialValue: false
        },
        {
          title: 'Muted',
          name: 'muted',
          type: 'boolean',
          description: 'Mute video (required for autoplay)',
          initialValue: true
        }
      ]
    }),
    defineArrayMember({
      title: 'Image Gallery',
      name: 'gallery',
      type: 'object',
      description: 'A grid of 2-4 images displayed side by side',
      fields: [
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [
            {
              type: 'image',
              options: {
                hotspot: true
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                  description: 'Important for SEO and accessibility.'
                }
              ]
            }
          ],
          validation: rule => rule.min(2).max(4)
        },
        {
          name: 'caption',
          title: 'Gallery Caption',
          type: 'string',
          description: 'Optional caption for the entire gallery'
        }
      ]
    }),
  ],
})
