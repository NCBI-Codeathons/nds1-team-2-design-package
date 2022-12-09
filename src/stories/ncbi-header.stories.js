import { formatWithPrettier } from "./utils";

export default {
    title: "NCBI/Components/Header",
};

export const Base = () => formatWithPrettier(`
    <header data-testid="header" class="usa-header usa-header--basic">
    <div class="ncbi-header">
        <div class="ncbi-header__container">
        <a class="usa-link ncbi-header__logo-container-text" href="/">
            Project title
        </a>
        <div class="ncbi-header__content ncbi-header__content--desktop">
            <button
            type="button"
            class="usa-button usa-button--outline ncbi-button--outline-inverse"
            data-testid="toggleSearchOverlayButton"
            aria-controls="search-panel"
            aria-label="Show search overlay"
            aria-expanded="false"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                class="usa-icon usa-icon--size-3"
                focusable="false"
                role="img"
                aria-hidden="true"
            >
                <path
                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                ></path></svg
            ><span class="usa-sr-only">Search</span></button
            ><a
            class="usa-button usa-button--outline ncbi-button--outline-inverse"
            href="https://account.ncbi.nlm.nih.gov/"
            target="_blank"
            rel="noreferrer noopener"
            >Login button</a
            >
        </div>
        <div class="ncbi-header__content ncbi-header__content--mobile">
            <button
            type="button"
            aria-label="Show menu"
            class="ncbi-header__hamburger-button"
            data-testid="navMenuButton"
            >
            <svg
                width="31"
                height="21"
                viewBox="0 0 31 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                aria-hidden="true"
                class="ncbi-hamburger-icon"
            >
                <path
                fill="#F1F1F1"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.125 20.75H30.875V17.3333H0.125V20.75ZM0.125 12.2083H30.875V8.79167H0.125V12.2083ZM0.125 0.25V3.66667H30.875V0.25H0.125Z"
                ></path>
            </svg>
            </button>
        </div>
        </div>
    </div>
    <div
        class="ncbi-search-panel ncbi--show-only-at-desktop display-none"
        data-testid="searchPanel"
    >
        <div class="ncbi-search-panel__container">
        <form
            data-testid="form"
            class="usa-search usa-search--big ncbi-search-panel__form"
            role="search"
            action="https://www.ncbi.nlm.nih.gov/search/all/"
            method="GET"
            aria-describedby="search-field-desktop-navigation-help-text"
        >
            <label
            data-testid="label"
            class="usa-sr-only"
            for="search-field-desktop-navigation"
            >Search site</label
            ><input
            data-testid="textInput"
            class="usa-input"
            id="search-field-desktop-navigation"
            name="term"
            type="search"
            placeholder="Search site"
            value=""
            /><button type="submit" class="usa-button" data-testid="button">
            <span class="usa-search__submit-text">Search button</span
            ><img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAgMCAxNiA5LjUgNi41IDYuNSAwIDEgMCA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0eiIvPjwvc3ZnPg=="
                class="usa-search__submit-icon"
                alt="Search button"
            />
            </button>
        </form>
        <p
            class="ncbi-search-panel__help-text"
            id="search-field-desktop-navigation-help-text"
        >
            Ut rerum aut.
        </p>
        </div>
    </div>
    <div data-testid="gridContainer" class="grid-container">
        <nav
        class="usa-nav"
        data-testid="primaryNavSidebar"
        aria-labelledby="primary-navigation-sr-only-title"
        >
        <p class="usa-sr-only" id="primary-navigation-sr-only-title">
            Primary site navigation
        </p>
        <form
            data-testid="form"
            class="usa-search usa-search--small ncbi--hide-at-desktop margin-top-6"
            role="search"
            action="https://www.ncbi.nlm.nih.gov/search/all/"
            method="GET"
        >
            <label
            data-testid="label"
            class="usa-sr-only"
            for="search-field-mobile-navigation"
            >Search</label
            ><input
            data-testid="textInput"
            class="usa-input"
            id="search-field-mobile-navigation"
            name="term"
            type="search"
            value=""
            /><button type="submit" class="usa-button" data-testid="button">
            <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAgMCAxNiA5LjUgNi41IDYuNSAwIDEgMCA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0eiIvPjwvc3ZnPg=="
                class="usa-search__submit-icon"
                alt="Search"
            />
            </button>
        </form>
        <ul class="usa-nav__primary usa-accordion">
            <li class="usa-nav__primary-item">
            <div class="usa-nav__primary-item">
                <button
                data-testid="navDropDownButton"
                class="usa-accordion__button usa-nav__link ncbi-nav__link"
                aria-expanded="false"
                aria-controls="ef1dfcf1-476a-45b1-9437-f5c1021af544"
                type="button"
                >
                <span>Quam fugiat</span>
                </button>
                <ul class="usa-nav__submenu" hidden="">
                <li class="usa-nav__submenu-item">
                    <a
                    class="usa-link"
                    aria-label="Go to internal page: Ipsum voluptate"
                    href="/collection-landing-page"
                    >Ipsum voluptate</a
                    >
                </li>
                <li class="usa-nav__submenu-item">
                    <a
                    class="usa-link usa-link--external"
                    href="http://Maddison.biz/"
                    aria-label="Go to external link: Et officiis"
                    target="_blank"
                    rel="noreferrer noopener"
                    >Et officiis</a
                    >
                </li>
                <li class="usa-nav__submenu-item">
                    <a
                    class="usa-link usa-link--external"
                    href="https://a-mock-document-url/"
                    aria-label="Open document: Odio dolorum <small class='usa-link__meta'>[PDF, 14kB]</small>"
                    target="_blank"
                    rel="noreferrer noopener"
                    ><span
                        >Odio dolorum
                        <small class="usa-link__meta">[PDF, 14kB]</small></span
                    ></a
                    >
                </li>
                </ul>
            </div>
            </li>
            <li class="usa-nav__primary-item">
            <a class="usa-link ncbi-nav__link" href="/collection-landing-page"
                ><span>Vel atque</span></a
            >
            </li>
            <li class="usa-nav__primary-item">
            <a
                class="usa-button usa-button--outline ncbi--hide-at-desktop ncbi-nav__mobile-login-button ncbi-button--outline"
                href="https://account.ncbi.nlm.nih.gov/"
                target="_blank"
                rel="noreferrer noopener"
                ><span class="text-primary">Login button</span></a
            >
            </li>
        </ul>
        <button
            class="usa-nav__close ncbi-nav__close-button"
            data-testid="navCloseButton"
            aria-label="Close navigation menu"
            type="button"
        >
            <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgNi40MSAxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPjwvc3ZnPg=="
            alt="close"
            />
        </button>
        </nav>
    </div>
    </header>
`);