// describe는 유닛의 묶음
describe("텍스트 관리자 입니다.", () => {
  let textManager;

  beforeEach(() => {
    textManager = new TextManager();
  });

  it("텍스트 값을 전달합니다.", () => {
    const initValue = textManager.getValue();
    //이것이 증명되면 getValue 함수가 잘 작동하는것
    expect(textManager.getValue()).toBe(initValue);
  });

  it("텍스트 값을 수정합니다.", () => {
    const newText = { data: "Hello HyunHo!" };
    textManager.setValue(newText);
    expect(textManager.getValue()).toBe(newText.data);
  });
});
