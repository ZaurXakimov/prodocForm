let mounthName = ''
/*
describe('Выпадающий список "Клиника', function() {
    it('Проверка на смену класса is_opened', function () {
        cy.visit('https://prodoctorov.ru/new/rate/doctor/12/');

        cy.get('.b-appointment-form__lpu-select .b-select__trigger-main-text')
            .click();

        cy.get('.b-select-wrapper')
            .first()
            .find('.b-select_is_opened')
    });

    it('Проверка на заполненность выпадающего списка', function () {
        cy.get('.b-appointment-form__lpu-select>option')
            .eq(0)
            .contains('Выберите клинику');

        cy.get('.b-appointment-form__lpu-select>option')
            .eq(1)
            .should('not.contain','другая клиника')
    });

    it('Отображение связанного поля при выборе "Клиника -> Другая клиника"', function () {
        cy.get('.b-select_is_opened>ul>li')
            .last()
            .click();

        cy.get('.b-address-select__other-lpu')
            .should('have.attr', 'style', 'display: block;')
    });

    it('Скрытие связанного поля при выборе "Клиника -> Выбирите клинику"', function () {
        cy.get('.b-appointment-form__lpu-select .b-select__trigger-main-text')
            .click();

        cy.get('.b-select_is_opened>ul>li')
            .first()
            .click();

        cy.get('.b-address-select__other-lpu')
            .should('have.attr', 'style', 'display: none;')
    })
});

describe('Поля с рейтингом (на примере "Тщательность обследования"', function() {
        it('Рейтинг -> Тщательность обследования', function () {
            cy.get('[data-name="id_osmotr"]>.b-stars__star-container>div')
                .eq(0)
                .click()
                .should('have.class','b-stars__star b-stars__star_bad')

            cy.get('[data-name="id_osmotr"]>.b-stars__star-container>div')
                .last()
                .find('span')
                .last()
                .contains('Ужасно')
        })
});
*/

describe('Дата посещения', function () {
        it('Возможность выбрать месяц (из допустимых)', function () {
            cy.visit('https://prodoctorov.ru/new/rate/doctor/12/');
            cy.get('.b-rate-form__date .b-select-wrapper .b-select__trigger-text>span')
                .click()

            cy.get('.b-rate-form__select_month>ul>li')
                .eq(1)
                .click()

            cy.get('.b-rate-form__select_month .b-select__option_is_disabled').then(elem => {
                mounthName = Cypress.$(elem).text().trim();
            });

            cy.get('.b-rate-form__select_month>ul>li')
                .eq(1)
                .should($el => expect($el.text().trim()).to.equal(mounthName));
        });

        it('Нет возможности выбрать месяц (из не допустимых)', function () {
            cy.get('.b-rate-form__select_month>ul>li')
                .eq(6)
                .click({force:true});

            cy.get('.b-rate-form__select_month .b-select__option_is_disabled').then(elem => {
                mounthName = Cypress.$(elem).text().trim();
            });

            cy.get('.b-rate-form__select_month>ul>li')
                .eq(6)
                .should($el => expect($el.text().trim()).not.to.equal(mounthName));
        });
});