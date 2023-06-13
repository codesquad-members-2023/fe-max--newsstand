export function UnSubsAlert() {
  return `<div class="unsubs-alert"></div>`;
}

export function renderUnSubsAlert(pressName: string) {
  const unSubsAlert = document.querySelector(".unsubs-alert") as HTMLElement;

  unSubsAlert.innerHTML = `
    <div class="text-wrapper">
      <div class="text"><span>${pressName}</span>을(를)<br>
      구독해지하시겠습니까?</div>
    </div>
    <div class="buttons">
      <button class="button yes">예, 해지합니다</button>
      <button class="button no">아니오</button>
    </div>
  `;
  unSubsAlert.style.display = "flex";
}

export function closeUnSubsAlert() {
  const unSubsAlert = document.querySelector(".unsubs-alert") as HTMLElement;
  unSubsAlert.style.display = "none";
}
