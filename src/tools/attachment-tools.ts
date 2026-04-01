import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const getAttachmentsForObjectTool: Tool = {
  name: "asana_get_attachments_for_object",
  description: "Get all attachments on a task, project, or project brief.",
  inputSchema: {
    type: "object",
    properties: {
      parent: {
        type: "string",
        description: "The GID of the parent object (task, project, or project_brief) to get attachments for"
      },
      limit: {
        type: "number",
        description: "Maximum number of attachments to return (1-100, default 100)"
      },
      offset: {
        type: "string",
        description: "Pagination offset token"
      },
      opt_fields: {
        type: "string",
        description: "Comma-separated list of optional fields to include (e.g. name,download_url,host,parent,size,created_at)"
      }
    },
    required: ["parent"]
  }
};

export const getAttachmentTool: Tool = {
  name: "asana_get_attachment",
  description: "Get details of a specific attachment by GID, including its download URL.",
  inputSchema: {
    type: "object",
    properties: {
      attachment_gid: {
        type: "string",
        description: "The GID of the attachment to retrieve"
      },
      opt_fields: {
        type: "string",
        description: "Comma-separated list of optional fields to include (e.g. name,download_url,host,parent,size,created_at,view_url)"
      }
    },
    required: ["attachment_gid"]
  }
};

export const createAttachmentTool: Tool = {
  name: "asana_create_attachment",
  description: "Upload a file attachment to a task, project, or project brief. Accepts a local file path (for stdio MCP servers) or a URL to attach as an external link.",
  inputSchema: {
    type: "object",
    properties: {
      parent: {
        type: "string",
        description: "The GID of the parent object (task, project, or project_brief) to attach to"
      },
      file_path: {
        type: "string",
        description: "Absolute path to a local file to upload. Use this OR url, not both."
      },
      url: {
        type: "string",
        description: "URL of an external resource to attach as a link. Use this OR file_path, not both."
      },
      name: {
        type: "string",
        description: "Name of the attachment. Required when using url. For file_path, defaults to the filename."
      },
      resource_subtype: {
        type: "string",
        description: "The type of attachment: 'asana' for file uploads (default when using file_path), 'external' for URL links (default when using url).",
        enum: ["asana", "external"]
      }
    },
    required: ["parent"]
  }
};

export const deleteAttachmentTool: Tool = {
  name: "asana_delete_attachment",
  description: "Delete a specific attachment by GID.",
  inputSchema: {
    type: "object",
    properties: {
      attachment_gid: {
        type: "string",
        description: "The GID of the attachment to delete"
      }
    },
    required: ["attachment_gid"]
  }
};
