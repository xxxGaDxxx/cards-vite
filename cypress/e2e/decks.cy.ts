/// <reference types="cypress" />

describe('Таблица с паками', () => {
  it('Тест с авторизацией', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.flashcards.andrii.es/v1/auth/login',
      body: {
        email: 'qwegadqwe@gmail.com',
        password: '123qwe',
      },
    }).then(() => {
      cy.visit('http://localhost:5173/decks')
      // Ваши проверки и действия на странице с приватным роутингом
      cy.get('input[type="search"]').should('have.value', '')
    })
  })

  it('ночальное состояние фильтров', () => {
    //TODO изменить url
    cy.visit('http://localhost:5173/decks')

    //проверям что input пуст
    cy.get('input[type="search"]').should('have.value', '')

    //проверяем что button all выбрана
    cy.get('#all').should('have.class', '_active_pi4rx_38')

    //проверяем что в  select первое значение совпадает с выбранным в ползунке
    cy.get('span._body1_1qfmh_33._rectangle_1tlby_6')
      .first()
      .invoke('text')
      .then(text => {
        cy.get('span._sliderThumb_1tlby_42').first().should('have.attr', 'aria-valuenow', text)
      })

    //проверяем что в select второе значение совпадает с выбранным в ползунке
    cy.get('span._body1_1qfmh_33._rectangle_1tlby_6')
      .last()
      .invoke('text')
      .then(text => {
        cy.get('span._sliderThumb_1tlby_42').last().should('have.attr', 'aria-valuenow', text)
      })

    //проверяем что бы в пагинации выбранна была первая страница
    cy.get('._selected_13b92_29')
      .should('have.descendants', 'p._body2_1qfmh_49._text_13b92_1')
      .contains('1')

    //проверяем что бы в пагинации было установлеено стартовое значение 7 для отображение в таблице елементов
    cy.get('button._selectTrigger_14hrv_21').find('span').contains('7')

    //проверяем что бы в таблице было 7 елементов как в пагинации
    cy.get('table._table_180ks_1 tbody tr').should('have.length', 7)
  })

  it('заполнение фильтров, отображение в таблице, сброс', () => {
    cy.intercept('GET', 'https://api.flashcards.andrii.es/v1/decks**').as('request')

    cy.visit('http://localhost:5173/')

    //в input вводим значение
    cy.get('input[type="search"]').type('123')
    cy.wait('@request')

    //в select устанавливаем первое значение и проверяем что бы отображалось то что установили
    cy.get('span._sliderThumb_1tlby_42')
      .first()
      .type('{rightarrow}')
      .then(() => {
        cy.get('span._sliderThumb_1tlby_42')
          .first()
          .invoke('attr', 'aria-valuenow')
          .then(updatedValue => {
            cy.get('span._body1_1qfmh_33._rectangle_1tlby_6')
              .first()
              .invoke('text')
              .then(initialValue => {
                expect(updatedValue).to.equal(initialValue)
              })
          })
      })

    //в select устанавливаем второе значение и проверяем что бы отображалось то что установили
    cy.get('span._sliderThumb_1tlby_42')
      .last()
      .type('{leftarrow}')
      .then(() => {
        cy.get('span._sliderThumb_1tlby_42')
          .last()
          .invoke('attr', 'aria-valuenow')
          .then(updatedValue => {
            cy.get('span._body1_1qfmh_33._rectangle_1tlby_6')
              .last()
              .invoke('text')
              .then(initialValue => {
                expect(updatedValue).to.equal(initialValue)
              })
          })
      })
    cy.wait(500)
    cy.wait('@request')

    //в table проверяем что бы в столбце Name находились строки в которые входит значение из input
    cy.get('table._table_180ks_1 tbody td._tableCell_180ks_26:nth-child(1)').each(cell => {
      cy.get('input[type="search"]')
        .invoke('val')
        .then(searchValue => {
          // @ts-ignore
          const cellText = cell.text().toLowerCase()
          // @ts-ignore
          const searchValueLower = String(searchValue).toLowerCase()

          expect(cellText.includes(searchValueLower)).to.be.true
        })
    })

    //в table проверяем что бы в столбце Cards находились значения не выходящие из диапазона указанные в select
    cy.get('div._container_1tlby_1').then(container => {
      cy.wrap(container)
        .find('span._body1_1qfmh_33._rectangle_1tlby_6')
        .first()
        .invoke('text')
        .then(firstValue => {
          cy.wrap(container)
            .find('span._body1_1qfmh_33._rectangle_1tlby_6')
            .last()
            .invoke('text')
            .then(secondValue => {
              cy.get('table._table_180ks_1 tbody td._tableCell_180ks_26:nth-child(2)').each(
                cell => {
                  cy.wrap(cell)
                    .invoke('text')
                    .then(cardsValue => {
                      // @ts-ignore
                      expect(parseInt(cardsValue)).to.be.gte(parseInt(firstValue))
                      // @ts-ignore
                      expect(parseInt(cardsValue)).to.be.lte(parseInt(secondValue))
                    })
                }
              )
            })
        })
    })

    // сбрасываем фильтрацию
    cy.contains('Clear Filter').click()

    cy.wait(500)
    cy.wait('@request')

    //проверяем что бы input  стал пустым
    cy.get('input[type="search"]').should('have.value', '')

    //проверяем что в  select первое значение совпадает с выбранным в ползунке
    cy.get('span._body1_1qfmh_33._rectangle_1tlby_6')
      .first()
      .invoke('text')
      .then(text => {
        cy.get('span._sliderThumb_1tlby_42').first().should('have.attr', 'aria-valuenow', text)
      })

    //проверяем что в  select второе значение совпадает с выбранным в ползунке
    cy.get('span._body1_1qfmh_33._rectangle_1tlby_6')
      .last()
      .invoke('text')
      .then(text => {
        cy.get('span._sliderThumb_1tlby_42').last().should('have.attr', 'aria-valuenow', text)
      })

    cy.scrollTo(0, 100)
    cy.get('._selectTrigger_14hrv_21').click()

    //в пагинации устанавливаем сколько строк должно быть в table
    cy.get('._selectContent_14hrv_48')
    cy.get('._selectItem_14hrv_58').then(() => {
      cy.get('._selectItem_14hrv_58').first().click()
    })

    cy.wait(500)
    cy.wait('@request')

    //проверяем что бы в таблице было елементов как в пагинации
    cy.get('button._selectTrigger_14hrv_21')
      .find('span')
      .invoke('text')
      .then(text => {
        cy.get('table._table_180ks_1 tbody tr').should('have.length', text)
      })
  })
})
