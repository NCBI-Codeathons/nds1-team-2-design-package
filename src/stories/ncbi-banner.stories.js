import { formatWithPrettier } from "./utils";

export default {
    title: "NCBI/Components/Banners",
};

const Template = () =>
    formatWithPrettier(`
    <section
    class="usa-banner ncbi-banner ncbi-banner--with-image"
    style="
      background-image: url(/images/homepage-background.svg);
      background-size: cover;
    "
  >
    <div
      data-testid="gridContainer"
      class="grid-container ncbi-banner__container"
    >
      <div class="ncbi-banner__box">
        <h1
          class="font-heading-2xl ncbi-banner__title ncbi-banner__title--with-intro"
        >
          Eum officia
        </h1>
        <div class="ncbi-banner__introduction rich-text">
          <p>
            Quam rerum unde dolores laboriosam autem a. Architecto blanditiis
            velit impedit laboriosam quia inventore aspernatur aut. Dolorum
            consequuntur ut non accusamus error tempore dignissimos sed eum. Aut
            ut quisquam iusto nostrum dolore in et modi nam. Iure dicta eaque ab
            ut velit quo.
          </p>
        </div>
        <form
          data-testid="form"
          class="usa-search usa-search--big ncbi-search-panel__form"
          role="search"
          action="https://www.ncbi.nlm.nih.gov/search/all/"
          method="GET"
          aria-describedby="search-field-home-banner-help-text"
        >
          <label
            data-testid="label"
            class="usa-sr-only"
            for="search-field-home-banner"
            >Sapiente praesentium</label
          ><input
            data-testid="textInput"
            class="usa-input"
            id="search-field-home-banner"
            name="term"
            type="search"
            placeholder="Sapiente praesentium"
            value=""
          /><button type="submit" class="usa-button" data-testid="button">
            <span class="usa-search__submit-text">Search</span
            ><img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAgMCAxNiA5LjUgNi41IDYuNSAwIDEgMCA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0eiIvPjwvc3ZnPg=="
              class="usa-search__submit-icon"
              alt="Search"
            />
          </button>
        </form>
        <p
          class="ncbi-search-panel__help-text"
          id="search-field-home-banner-help-text"
        >
          Nemo quis eveniet aut officiis voluptatem fugiat est iure.
        </p>
      </div>
    </div>
  </section>  
`);

const Template2 = () =>
    formatWithPrettier(`
    <section
  class="usa-banner ncbi-banner ncbi-banner--with-image"
  style="
    background-image: url('/images/homepage-background.svg');
    background-size: cover;
  "
>
  <div
    data-testid="gridContainer"
    class="grid-container ncbi-banner__container"
  >
    <div class="ncbi-banner__box">
      <h1
        class="font-heading-2xl ncbi-banner__title ncbi-banner__title--with-intro"
      >
        Ab voluptas non
      </h1>
      <div class="ncbi-banner__introduction rich-text">
        <p>
          Qui ut adipisci adipisci beatae consequatur. Porro dolore est dolorem
          pariatur architecto. Molestiae magni necessitatibus harum. Unde veniam
          ex aut modi est odit vitae assumenda. Eligendi animi consequatur quia
          ut rem voluptatem qui.
        </p>
      </div>
      <p class="ncbi-banner__section-summary-title">On this page</p>
      <hr />
      <ul class="usa-list ncbi-banner__section-summary-list">
        <li>
          <a
            class="ncbi-banner__section-summary-list-link"
            href="#ut-debitis-sit"
            >Ut debitis sit</a
          >
        </li>
        <li>
          <a
            class="ncbi-banner__section-summary-list-link"
            href="#ullam-architecto"
            >Ullam architecto</a
          >
        </li>
        <li>
          <a
            class="ncbi-banner__section-summary-list-link"
            href="#tenetur-veniam"
            >Tenetur veniam</a
          >
        </li>
        <li>
          <a
            class="ncbi-banner__section-summary-list-link"
            href="#mollitia-culpa"
            >Mollitia culpa</a
          >
        </li>
        <li>
          <a
            class="ncbi-banner__section-summary-list-link"
            href="#corporis-accusamus-perspiciatis"
            >Corporis accusamus perspiciatis</a
          >
        </li>
        <li>
          <a
            class="ncbi-banner__section-summary-list-link"
            href="#qui-eum-voluptas"
            >Qui eum voluptas</a
          >
        </li>
        <li>
          <a class="ncbi-banner__section-summary-list-link" href="#qui-hic"
            >Qui hic</a
          >
        </li>
        <li>
          <a
            class="ncbi-banner__section-summary-list-link"
            href="#quidem-aliquid"
            >Quidem aliquid</a
          >
        </li>
        <li>
          <a
            class="ncbi-banner__section-summary-list-link"
            href="#tenetur-veniam-1"
            >Tenetur veniam</a
          >
        </li>
        <li>
          <a
            class="ncbi-banner__section-summary-list-link"
            href="#praesentium-et-consequatur"
            >Praesentium et consequatur</a
          >
        </li>
      </ul>
    </div>
  </div>
</section>
`);

const Template3 = () =>
    formatWithPrettier(`
<section class="usa-banner ncbi-banner ncbi-banner--white">
  <div
    data-testid="gridContainer"
    class="grid-container ncbi-banner__container"
  >
    <div class="ncbi-banner__box">
      <h1
        class="font-heading-2xl ncbi-banner__title ncbi-banner__title--with-intro"
      >
        Nisi reprehenderit iste
      </h1>
      <div class="ncbi-banner__introduction rich-text">
        <p>
          Atque est nihil dolor enim aut. Rerum aut natus ea. Et nam vel
          repellendus quaerat quis. Qui quia ab ratione veniam nihil quaerat
          iusto quibusdam perferendis. Sit veritatis fuga laboriosam.
        </p>
      </div>
      <p class="ncbi-banner__section-summary-title">On this page</p>
      <hr />
      <ul class="usa-list ncbi-banner__section-summary-list">
        <li>
          <a
            class="ncbi-banner__section-summary-list-link ncbi-banner__section-summary-list-link--dark"
            href="#libero-voluptas"
            >Libero voluptas</a
          >
        </li>
        <li>
          <a
            class="ncbi-banner__section-summary-list-link ncbi-banner__section-summary-list-link--dark"
            href="#est-totam"
            >Est totam</a
          >
        </li>
        <li>
          <a
            class="ncbi-banner__section-summary-list-link ncbi-banner__section-summary-list-link--dark"
            href="#qui-veniam-sed"
            >Qui veniam sed</a
          >
        </li>
        <li>
          <a
            class="ncbi-banner__section-summary-list-link ncbi-banner__section-summary-list-link--dark"
            href="#necessitatibus-nemo"
            >Necessitatibus nemo</a
          >
        </li>
      </ul>
    </div>
  </div>
</section>
`);

export const HomePage = Template.bind({});
export const LandingPage = Template2.bind({});
export const GenericPage = Template3.bind({});
