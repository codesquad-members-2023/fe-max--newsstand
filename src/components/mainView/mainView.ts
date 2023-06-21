import { GridView } from "./gridView/gridView";
import { TabAndViewer } from "./tabAndViewer";
import { Store } from "@store/types";
import { MainViewState } from ".";
import { handleNextButtonClick, handlePrevButtonClick } from "@components/mainView/store/actions";
import { StateConst } from "./store/types";

export class MainView {
  store: Store<MainViewState>;

  $mainView: HTMLElement = document.createElement("section");
  tabAndViewer: TabAndViewer;
  $prevButton: HTMLElement = document.createElement("div");
  $nextButton: HTMLElement = document.createElement("div");

  private gridView: GridView;

  constructor(store: Store<MainViewState>) {
    this.store = store;
    this.tabAndViewer = new TabAndViewer(this.store);
    this.gridView = new GridView(this.store);

    this.initElement();
    this.initSubscription();
    this.setEvents();
    this.updateArrowVisibility();
  }

  private initElement() {
    this.$mainView.append(this.tabAndViewer.getElement());

    this.$mainView.className = "main-view";
    this.$prevButton.className = "main-view__left-arrow";
    this.$nextButton.className = "main-view__right-arrow";

    this.$mainView.append(this.$prevButton, this.$nextButton);
    this.$mainView.append(this.gridView.getElement());
  }

  setEvents() {
    this.$prevButton.addEventListener("click", () => {
      handlePrevButtonClick(this.store);
    });

    this.$nextButton.addEventListener("click", () => {
      handleNextButtonClick(this.store);
    });
  }

  initSubscription() {
    this.store.subscribe(this.updateArrowVisibility.bind(this));
  }

  private updateArrowVisibility() {
    const {
      currentView,
      currentTab,
      gridState,
      gridState: { currentPage },
    } = this.store.getState();

    const lastPage =
      currentTab === StateConst.ALL_PRESS_TAB
        ? Math.ceil(gridState.pressList.length / StateConst.ITEM_PER_PAGE)
        : Math.ceil(gridState.subscribedPressList.length / StateConst.ITEM_PER_PAGE);

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage >= lastPage;

    const setPrevButtonClass = (className: string) => {
      this.$prevButton.className = className;
    };

    const setNextButtonClass = (className: string) => {
      this.$nextButton.className = className;
    };

    if (currentView === StateConst.LIST_VIEW) {
      setPrevButtonClass("main-view__left-arrow");
      setNextButtonClass("main-view__right-arrow");

      return;
    }

    const prevButtonClass = isFirstPage ? "main-view__left-arrow--hidden" : "main-view__left-arrow";
    const nextButtonClass = isLastPage
      ? "main-view__right-arrow--hidden"
      : "main-view__right-arrow";

    setPrevButtonClass(prevButtonClass);
    setNextButtonClass(nextButtonClass);
  }
}
