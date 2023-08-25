/// <reference types="cypress" />
describe('Логинизация', () => {
  it('Начальное состояние формы', () => {
    cy.visit('http://localhost:5173/')

    //Проверка, что все инпуты пусты
    cy.get('input[name="email"]').should('have.value', '')
    cy.get('input[name="password"]').should('have.value', '')

    //Проверка, что чекбокс не нажат
    cy.get('input[type="checkbox"]').should('not.be.checked')
  })

  it('Заполнение формы не правильно', () => {
    cy.visit('http://localhost:5173/')

    //Ввод значений в input
    cy.get('input[name="email"]').type('qweasd')
    cy.get('input[name="password"]').type('12')

    //Проверка введенных значений
    cy.get('input[name="email"]').should('have.value', 'qweasd')
    cy.get('input[name="password"]').should('have.value', '12')

    //Найти кнопку рядом с инпутом содержащей svg, для отображения пароля
    cy.get('input[name="password"]')
      .parent() // Родительский элемент инпута
      .find('button:has(svg)')
      .click()

    //Проверка, что в элементaх <p> не содержится ошибкок
    cy.get('input[name="email"]').next('p').should('have.text', '')
    cy.get('input[name="password"]').parent().find('p').should('have.text', '')
    cy.contains('label', 'Remember me').parent().find('p').should('have.text', '')

    //Найти форму и затем кнопку с названием "Sign In"
    cy.get('form').find('button:contains("Sign In")').click()

    //Проверка, что в элементaх <p> содержатся ошибки
    cy.get('input[name="email"]').next('p').should('not.have.text', '')
    cy.get('input[name="password"]').parent().find('p').should('not.have.text', '')
    cy.contains('label', 'Remember me').parent().find('p').should('not.have.text', '')
  })

  it('Заполнение формы с правильными данными', () => {
    cy.visit('http://localhost:5173/')

    //Ввод значений в input
    cy.get('input[name="email"]').type('qwegadqwe@gmail.com')
    cy.get('input[name="password"]').type('123qwe')

    //Поставить чекбокс
    cy.contains('label', 'Remember me').click()

    //Найти форму и затем кнопку с названием "Sign In"
    cy.get('form').find('button:contains("Sign In")').click()

    //Проверка, что кнопка становится задизейблена
    cy.get('form').find('button:contains("Sign In")').should('be.disabled')

    //Проверка, что перешли на другую страницу
    cy.url().should('eq', 'http://localhost:5173/decks')
  })
})
