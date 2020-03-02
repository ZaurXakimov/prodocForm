const faker = require("faker");
faker.locale = "ru";

describe('Тестирование формы', function() {
    it('Попытка выполнить без заполнения полей формы -> Предупреждения обязательности заполнения', function () {
        cy.visit('https://prodoctorov.ru/new/rate/doctor/12/');
        cy.get('.b-phone-confirm__confirm')
            .click();

        cy.get('.b-rate-form__container-title .b-rate-form__error-message')
            .contains('Выберите клинику')
    });

    it('Выбрать "Другая клиника" и submit формы -> Предупреждения обязательности заполнения', function () {
        cy.get('.b-appointment-form__lpu-select .b-select__trigger-main-text')
            .click();

        cy.get('.b-select_is_opened>ul>li')
            .last()
            .click();

        cy.get('.b-phone-confirm__confirm')
            .click();

        cy.get('.b-rate-form__container-title .b-rate-form__error-message')
            .contains('Введите название клиники')

    });
    //.b-address-select__other-lpu

    it('Ввод "Название клиники" и submit формы -> Предупреждения обязательности заполнения', function () {
        cy.get('.b-address-select__other-lpu')
            .type('город Краснодар, Поликлиника №1 ');
        cy.get('.b-phone-confirm__confirm')
            .click();

        cy.get(':nth-child(5) > .b-stars__title-wrapper > .b-stars__error')
            .contains('Поставьте оценку');

        cy.get(':nth-child(6) > .b-stars__title-wrapper > .b-stars__error')
            .contains('Поставьте оценку');

        cy.get(':nth-child(7) > .b-stars__title-wrapper > .b-stars__error')
            .contains('Поставьте оценку');

        cy.get(':nth-child(8) > .b-stars__title-wrapper > .b-stars__error')
            .contains('Поставьте оценку');

        cy.get(':nth-child(9) > .b-stars__title-wrapper > .b-stars__error')
            .contains('Поставьте оценку');
    });

    it('Проставление рейтинга и submit формы -> Предупреждения обязательности заполнения', function () {
        cy.get(':nth-child(5) > .b-stars__star-container > [data-mark="2"] > svg > path')
            .click();

        cy.get(':nth-child(6) > .b-stars__star-container > [data-mark="2"] > svg > path')
            .click();

        cy.get(':nth-child(7) > .b-stars__star-container > [data-mark="2"] > svg > path')
            .click();

        cy.get(':nth-child(8) > .b-stars__star-container > [data-mark="2"] > svg > path')
            .click();

        cy.get(':nth-child(9) > .b-stars__star-container > [data-mark="2"] > svg > path')
            .click();

        cy.get('.b-phone-confirm__confirm')
            .click();

        cy.get('.b-rate-form__textarea-tooltip_not_complete')
    });

    it('Ввод в textarea 500 символов и submit формы -> Предупреждения обязательности заполнения', function () {
        cy.get(':nth-child(11) > .b-rate-form__textarea-wrapper > .b-rate-form__textarea')
            .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')

        cy.get(':nth-child(12) > .b-rate-form__textarea-wrapper > .b-rate-form__textarea')
            .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')

        cy.get(':nth-child(13) > .b-rate-form__textarea-wrapper > .b-rate-form__textarea')
            .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')

        cy.get('.b-phone-confirm__confirm')
            .click();

        cy.get('.b-phone-confirm__confirm-errors')
            .contains('Неверно введён номер')
    });

    it('Валидация поля "Диагноз" -> Диагноз добавляется', function () {
        cy.visit('https://prodoctorov.ru/new/rate/doctor/12/');

        cy.get('#s2id_autogen2')
            .type('рефлю');

        cy.get('#select2-result-label-3')
            .click();

        cy.get('ul.select2-choices li')
            .should('have.length', 2);

        cy.get('#s2id_autogen2')
            .type('Варикоз');

        cy.get('#select2-result-label-5')
            .click();

        cy.get('ul.select2-choices li')
            .should('have.length', 3);
    });

    it('Валидация поля "Диагноз" -> Диагноз удаляется', function () {
        cy.get(':nth-child(2) > .select2-search-choice-close')
            .click();

        cy.get('ul.select2-choices li')
            .should('have.length', 2);
    });

    it('Ввод номера телефона не по маске и submit формы -> Отображение ошибки', function () {
        cy.get('.b-phone-confirm__number')
            .type('0000000000');

        cy.get('.b-phone-confirm__confirm')
            .click();

        cy.get('.b-phone-confirm__confirm-errors')
            .contains('Неверно введён номер')
    });

    it('Ввод номера телефона по маске и submit формы', function () {
        cy.get('.b-phone-confirm__number')
            .clear()
            .type(faker.phone.phoneNumber().replace(/\D+/g, ""));
        cy.get('.b-phone-confirm__confirm')
            .click();
    })
});