import { useMutation } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { hygraph } from "@/lib/hygraph";

export interface ContactLeadInput {
  name: string;
  title?: string;
  email: string;
  companyName?: string;
  message: string;
  source?: string;
  consent: boolean;
  page: string;
  typeOfWork: string[];
}

const CREATE_CONTACT_LEAD = gql`
  mutation CreateContactLead($data: ContactLeadCreateInput!) {
    createContactLead(data: $data) {
      id
      name
      email
    }
  }
`;

export const useContact = () => {
  return useMutation({
    mutationFn: async (data: ContactLeadInput) => {
      // Filter out fields not present in the Hygraph schema
      const { title, page, message, ...otherData } = data;
      
      // Transform message string into RichTextAST format
      const richTextMessage = {
        children: [
          {
            type: "paragraph",
            children: [
              {
                text: message,
              },
            ],
          },
        ],
      };

      return await hygraph.request(CREATE_CONTACT_LEAD, {
        data: {
          ...otherData,
          message: richTextMessage,
        },
      });
    },
  });
};
