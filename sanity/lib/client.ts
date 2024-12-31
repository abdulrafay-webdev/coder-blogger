import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:"skX7tiiRYq4h3ZosP97nAKKSrnpg66Gq8dDdgwclA3JyX7B1dhYTsuYULcpl64KpHudKxuIjS44tOwbM5h1T3iXkxJHFY1KqBLcHpDA0q4lbnyFK3q9rGcDgHtDNkDMcu89uW9XpXWzg0a6lrd2620KfrHe40YuvTQ32wxl52317BXgXHlLP",
});
