const apiKey =
  "ReWxLFz2_tLXNkc_J3YFbRjDI5NEKIFp0tfFuWY5rX3YPsePmOlELjnUWk-cxYVJUqxLHST-fK0rGCp6iBgkMwyJiqRH3DgmFNlcT2Jpl8NPFbm81TCdPw2r258sYnYx";

const Yelp = {
  search: (term, location, sortBy) => {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed!");
      })
      .then((jsonResponse) => {
        console.log(jsonResponse.businesses);
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            const category =
              business.categories[0].title ||
              business.categories[1].title ||
              business.categories[2].title;
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address:
                business.location.address1 ||
                business.location.address2 ||
                business.location.address3,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: category,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        }
      });
  },
};

export default Yelp;
