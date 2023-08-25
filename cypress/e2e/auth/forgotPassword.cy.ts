/// <reference types="cypress" />
describe('Отправка email для востановления пароля', () => {
  it('Начальное состояние формы, проверка валидации, отправка', () => {
    cy.visit('http://localhost:5173/')

    //Кликнуть по ссылки для перехода
    cy.contains('a', 'Forgot password?').click()

    //Проверка, что перешли на другую страницу
    cy.url().should('eq', 'http://localhost:5173/password-recovery')

    //Проверка, что в элементaх <p> не содержится ошибкок
    cy.get('input[name="email"]').next('p').should('have.text', '')

    //Ввод значений в input
    cy.get('input[name="email"]').type('qweasd')

    //Проверка введенных значений
    cy.get('input[name="email"]').should('have.value', 'qweasd')

    //Кликнуть по копке отправить
    cy.contains('button', 'Send Instructions').click()

    //Проверка, что в элементaх <p> содержатся ошибки
    cy.get('input[name="email"]').next('p').should('not.have.text', '')

    //Ввод несуществующего email
    cy.get('input[name="email"]').type('qqqqqqqqqqqwwwwwwwwwwwzzzs12qw12qw12qw12@gmail.com')

    // Проверка, что элемент <div class="Toastify"> пустой
    cy.get('div.Toastify').should('be.empty')

    //Кликнуть по копке отправить
    cy.contains('button', 'Send Instructions').click()

    //Проверка, что кнопка становится задизейблена
    cy.get('form').find('button:contains("Send Instructions")').should('be.disabled')

    // Проверка, что элемент <div class="Toastify"> содержит все вложенные элементы
    cy.get('div.Toastify')
      .find('div.Toastify__toast-container')
      .find('div.Toastify__toast')
      .find('div.Toastify__toast-body')
      .should('exist')

    //Подождать две секунды что бы ошибка пропала
    cy.wait(2000)

    //Проверка, что элемент <div class="Toastify"> снова пустой
    cy.get('div.Toastify').should('be.empty')

    //Зачистить инпут
    cy.get('input[name="email"]').clear()

    //Ввод существующего email
    cy.get('input[name="email"]').type('qwegadqwe@gmail.com')

    //Кликнуть по копке отправить
    cy.contains('button', 'Send Instructions').click()

    //Проверка, что кнопка становится задизейблена
    cy.get('form').find('button:contains("Send Instructions")').should('be.disabled')

    // Проверка, что элемент <div class="Toastify"> содержит все вложенные элементы
    cy.get('div.Toastify')
      .find('div.Toastify__toast-container')
      .find('div.Toastify__toast')
      .find('div.Toastify__toast-body')
      .should('exist')

    //Проверка, что перешли на другую страницу
    cy.url().should('eq', 'http://localhost:5173/check-email')

    //Кликнуть для перехода назад назад
    cy.contains('a', 'Back to Sign In').click()

    //Проверка, что перешли на другую страницу
    cy.url().should('eq', 'http://localhost:5173/')

    //Подождать две секунды что бы ошибка пропала
    cy.wait(2000)

    //Проверка, что элемент <div class="Toastify"> снова пустой
    cy.get('div.Toastify').should('be.empty')
  })
})
