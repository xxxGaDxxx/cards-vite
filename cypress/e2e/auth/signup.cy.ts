/// <reference types="cypress" />
describe('Регистрация', () => {
  it('Начальное состояние формы', () => {
    cy.visit(`${Cypress.env('API_BASE_URL')}/registration`)

    //Проверка, что все инпуты пусты
    cy.get('input[name="email"]').should('have.value', '')
    cy.get('input[name="password"]').should('have.value', '')
    cy.get('input[name="password"]').should('have.value', '')
    cy.get('input[name="confirmPassword"]').should('have.value', '')
  })

  it('Заполнение формы не правильно', () => {
    cy.visit(`${Cypress.env('API_BASE_URL')}/registration`)

    //Ввод значений в input
    cy.get('input[name="email"]').type('qweasd')
    cy.get('input[name="password"]').type('12')
    cy.get('input[name="confirmPassword"]').type('123')

    //Проверка введенных значений
    cy.get('input[name="email"]').should('have.value', 'qweasd')
    cy.get('input[name="password"]').should('have.value', '12')
    cy.get('input[name="confirmPassword"]').should('have.value', '123')

    //Найти кнопку рядом с инпутом содержащей svg, для отображения пароля
    cy.get('input[name="password"]')
      .parent() // Родительский элемент инпута
      .find('button:has(svg)')
      .click()
    cy.get('input[name="confirmPassword"]')
      .parent() // Родительский элемент инпута
      .find('button:has(svg)')
      .click()

    //Проверка, что в элементaх <p> не содержится ошибкок
    cy.get('input[name="email"]').next('p').should('have.text', '')
    cy.get('input[name="password"]').parent().find('p').should('have.text', '')
    cy.get('input[name="confirmPassword"]').parent().find('p').should('have.text', '')

    //Найти форму и затем кнопку с названием "Sign Up"
    cy.get('form').find('button:contains("Sign Up")').click()

    //Проверка, что в элементaх <p> содержатся ошибки
    cy.get('input[name="email"]').next('p').should('have.text', 'Invalid email address')
    cy.get('input[name="password"]')
      .parent()
      .find('p')
      .should('have.text', 'Password must be at least 3 characters')
    cy.get('input[name="confirmPassword"]')
      .parent()
      .find('p')
      .should('have.text', "Passwords don't match")
  })

  it('Заполнение формы с существующим email', () => {
    cy.visit(`${Cypress.env('API_BASE_URL')}/registration`)

    //Ввод значений в input
    cy.get('input[name="email"]').type('qwegadqwe@gmail.com')
    cy.get('input[name="password"]').type('123qwe')
    cy.get('input[name="confirmPassword"]').type('123qwe')

    // Проверка, что элемент <div class="Toastify"> пустой
    cy.get('div.Toastify').should('be.empty')

    //Найти форму и затем кнопку с названием "Sign Up"
    cy.get('form').find('button:contains("Sign Up")').click()

    //Проверка, что кнопка становится задизейблена
    cy.get('form').find('button:contains("Sign Up")').should('be.disabled')

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

    //Зачистить инпуты
    cy.get('input[name="email"]').clear()
    cy.get('input[name="password"]').clear()
    cy.get('input[name="confirmPassword"]').clear()

    //Проверка, что в элементaх <p> содержатся ошибки
    cy.get('input[name="email"]').next('p').should('have.text', 'Enter Email')
    cy.get('input[name="password"]').parent().find('p').should('have.text', 'Enter Password')
    cy.get('input[name="confirmPassword"]').parent().find('p').should('have.text', 'Enter Password')
  })

  it('Заполнение формы  правильно', () => {
    cy.visit(`${Cypress.env('API_BASE_URL')}/registration`)

    //TODO каждый раз нуно добавлять новый email
    //Ввод значений в input
    cy.get('input[name="email"]').type('qwezxcwwwassswsaw@gmail.com')
    cy.get('input[name="password"]').type('123')
    cy.get('input[name="confirmPassword"]').type('123')

    // Проверка, что элемент <div class="Toastify"> пустой
    cy.get('div.Toastify').should('be.empty')

    //Найти форму и затем кнопку с названием "Sign Up"
    cy.get('form').find('button:contains("Sign Up")').click()

    //Проверка, что кнопка становится задизейблена
    cy.get('form').find('button:contains("Sign Up")').should('be.disabled')

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

    //Проверка, что перешли на другую страницу
    cy.url().should('eq', `${Cypress.env('API_BASE_URL')}/`)
  })
})
