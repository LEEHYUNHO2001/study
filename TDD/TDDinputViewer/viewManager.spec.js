describe("클릭이번트처리 및 뷰를 담당하는 함수입니다.", () => {
  //dependency injection(의존 주입)
  let textManager, btnEl, viewerEl, inpTxt, viewManager;
  beforeEach(() => {
    textManager = new TextManager();
    viewerEl = document.createElement("strong");
    btnEl = document.createElement("button");
    inpTxt = document.createElement("input");

    viewManager = new ViewManager(textManager, { viewerEl, btnEl, inpTxt });
  });

  it("viewManager에 인자가 잘 전달됐는지 확인합니다.", () => {
    const textManager = null;
    const btnEl = null;
    const viewerEl = null;
    const inpTxt = null;

    // 인자가 절달되는지 확인하는 함수
    const actual = () =>
      new ViewManager(textManager, {
        btnEl,
        viewerEl,
        inpTxt,
      });
    // 다 널이여서 실행이 안되는 상황일때 toThrowError으로 확인하자
    expect(actual).toThrowError();
  });

  it("click 이벤트가 발생했을 경우 changeValue 함수를 실행합니다.", () => {
    // 특정한 모듈의 함수를 감시합니다.
    spyOn(viewManager, "changeValue");
    btnEl.click();
    // toHaveBeenCalled : 함수가 호출이 된적이 있는지 판별합니다.
    expect(viewManager.changeValue).toHaveBeenCalled();
  });

  it("updateView 함수를 실행합니다.", () => {
    //viewManager의 changeValue함수가 실행되면 updateView함수를 감시하다 판별
    spyOn(viewManager, "updateView");
    viewManager.changeValue();
    expect(viewManager.updateView).toHaveBeenCalled();
  });
});
