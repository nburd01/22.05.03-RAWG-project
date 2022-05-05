import {APIKey} from './/apikey';

const PageList = (argument) => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');

    const displayResults = (articles) => {
      const resultsContent = articles.map((article) => (
        `<article class="cardGame">
          <img src='${article.background_image}'>
          <h2>${article.name}</h2>
          <h3>release : ${article.released}</h3>
          <p>rating : ${article.rating}</p>
          <p>${article.genres.map(genre => ` ${genre.name} `)}</p>
          <p>${article.tags.map(tag => ` ${tag.name} `)[0]}</p>

          <a href="#pagedetail/${article.id}">${article.id}</a>
        </article>`
      ));
      const resultsContainer = document.querySelector('.page-list .articles');
      resultsContainer.innerHTML = resultsContent.join("\n");
    };


    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}&search=${argument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData)
          displayResults(responseData.results)
        });
    };

    fetchList(`https://api.rawg.io/api/games?key=${APIKey}&page_size=9`, cleanedArgument);
  };  

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles">Loading...</div>
      </section>
    `;

    preparePage();
  };

  render();
};


export { PageList };
