import { useAuth } from "@/contexts/AuthContext";
import { useNewsletter } from "@/contexts/NewsletterContext";

export const useGetAuthorByNewsletter = (slug) => {
  const {authors} = useAuth();
  const {newsletters} = useNewsletter();

  let authorData = null;
  const specificNewsletter = newsletters.find(
    (news) => news.name.replace(/ /g, '-').toLowerCase() === slug.toLowerCase()
  );

  if (authors && specificNewsletter) {
    authorData = authors.find(a => a._id === specificNewsletter.author);
  }

  return authorData;
};
