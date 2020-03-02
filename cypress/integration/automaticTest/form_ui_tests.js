describe('Проверка наличия элементов в форме', function() {

    it('Клиника -> Выпадающий список', function() {
        cy.visit('https://prodoctorov.ru/new/rate/doctor/12/')
        cy.get('.b-appointment-form__lpu-select .b-select__trigger-main-text').click();

        cy.get('.b-select-wrapper').first()
            .find('.b-select_is_opened')
    });

    it('Наличие поля формы "Тщательность обследования"', function () {
        cy.get('[data-name=id_osmotr] .b-stars__title').contains("Тщательность обследования")
    });

    it('Наличие элемента с рейтингом у поля "Тщательность обследования"', function () {
        cy.get('[data-name=id_osmotr] .b-stars__star-container');
        cy.get('[data-name=id_osmotr] .b-stars__star-container').children()
            .should('have.length', 6)
    });

    it('Наличие поля формы "Эффективность лечения"', function () {
        cy.get('[data-name=id_efficiency] .b-stars__title').contains("Эффективность лечения")
    });

    it('Наличие элемента с рейтингом у поля "Эффективность лечения"', function () {
        cy.get('[data-name=id_efficiency] .b-stars__star-container');
        cy.get('[data-name=id_efficiency] .b-stars__star-container').children()
            .should('have.length', 6)
    });

    it('Наличие поля формы "Отношение к пациенту"', function () {
        cy.get('[data-name=id_friendliness] .b-stars__title').contains("Отношение к пациенту")
    });

    it('Наличие элемента с рейтингом у поля "Отношение к пациенту"', function () {
        cy.get('[data-name=id_friendliness] .b-stars__star-container');
        cy.get('[data-name=id_friendliness] .b-stars__star-container').children()
            .should('have.length', 6)
    });

    it('Наличие поля формы "Информирование пациента"', function () {
        cy.get('[data-name=id_informativity] .b-stars__title').contains("Информирование пациента")
    });

    it('Наличие элемента с рейтингом у поля "Информирование пациента"', function () {
        cy.get('[data-name=id_informativity] .b-stars__star-container');
        cy.get('[data-name=id_informativity] .b-stars__star-container').children()
            .should('have.length', 6)
    });

    it('Наличие поля формы "Посоветуете ли Вы врача?"', function () {
        cy.get('[data-name=id_recommend] .b-stars__title').contains("Посоветуете ли Вы врача?")
    });

    it('Наличие элемента с рейтингом у поля "Посоветуете ли Вы врача?"', function () {
        cy.get('[data-name=id_recommend] .b-stars__star-container');
        cy.get('[data-name=id_recommend] .b-stars__star-container').children()
            .should('have.length', 6)
    })

    it('Наличие текста для поля формы "Дата посещения"', function () {
        cy.get('.b-rate-form__container-title').contains("Дата посещения")
    });

    it('Наличие поля формы текста "Дата посещения"', function () {
        cy.get('.b-rate-form__select_month .b-select__trigger-text').click()
    });

    it('Наличие текста для поля формы "Понравилось"', function () {
        cy.get('.b-rate-form__title').contains("Понравилось")
    });

    it('Наличие формы ввода текса для "Понравилось"', function () {
        cy.get('.b-rate-form__title').contains("Понравилось")
    });

    it('Наличие текста для поля формы "Не понравилось"', function () {
        cy.get('.b-rate-form__title').contains("Не понравилось")
    });

    it('Наличие текста для поля формы "Комментарий"', function () {
        cy.get('.b-rate-form__title').contains("Комментарий")
    });

    it('Наличие textarea', function () {
        cy.get('.b-rate-form__textarea-wrapper').children('.b-rate-form__textarea')
    });

    it('Наличие поля формы "Ваш диагноз"', function () {
        cy.get('#s2id_autogen2')
    });

    it('Наличие блока для загрузки фотографии', function () {
        cy.get('.b-rate-form__container').children('.b-rate-form__container-header')
        cy.get('.b-rate-form__container').children('.b-photo-loader')
    });

    it('Наличие поля для ввода телефона и кнопки "Отправить СМС с кодом"', function () {
        cy.get('.b-phone-confirm__number-wrapper').children('.b-phone-confirm__number')
        cy.get('.b-phone-confirm__confirm-container_send').children('.b-phone-confirm__confirm')
    });

    it('Наличие польлзовательского соглашения', function () {
        cy.get('.b-rate-form__ps > a').eq(0)
            .should('have.attr', 'href').and('include', '/info/privacy-policy/')
        cy.get('.b-rate-form__ps > a').eq(1)
            .should('have.attr', 'href').and('include', '/info/terms-of-use/')
    });

});