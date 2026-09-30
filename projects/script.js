(() => {
  const control = document.getElementById('booking-scenario');
  const output = document.getElementById('booking-output');
  if (!control || !output) return;
  // Authored teaching example; never calls a booking provider.
  const scenarios = [
    ['Тестовая CRM подтвердила запись DEMO-001.', 'Вызовов тестовой CRM: 1'],
    ['Это время уже занято. Выберите другое.', 'Вызовов тестовой CRM: 0 · запись не создаётся'],
    ['Не удалось проверить время. Запись не создана.', 'Вызовов тестовой CRM: 0 · неизвестная доступность блокирует создание'],
    ['Параметры разошлись. Повторно выберите время.', 'Вызовов тестовой CRM: 0 · сначала восстановление выбора'],
    ['Ответ CRM неясен. Нужна сверка перед повтором.', 'Вызовов тестовой CRM: 1 · повторная команда не создаёт новую запись'],
    ['Возвращён прежний результат DEMO-001; второй записи нет.', 'Вызовов тестовой CRM: 1 · два подтверждения, одна тестовая запись'],
  ];
  function render() {
    const scenario = scenarios[Number(control.value)];
    if (!scenario) return;
    const message = document.createElement('p');
    message.className = 'demo-message';
    message.textContent = scenario[0];
    const meta = document.createElement('p');
    meta.className = 'demo-meta';
    meta.textContent = scenario[1];
    output.replaceChildren(message, meta);
  }
  control.addEventListener('change', render);
  render();
})();
