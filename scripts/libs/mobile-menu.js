class MobileMenu {
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector('.mobile-menu__btn');
        this.DOM.cover = document.querySelector('.mobile-menu__cover');
        this.DOM.main1 = document.querySelector('.title1');
        this.DOM.main2 = document.querySelector('.title2');
        this.DOM.main3 = document.querySelector('.title3');
        this.DOM.main4 = document.querySelector('.title4');
        this.DOM.main5 = document.querySelector('.title5');
        this.DOM.container = document.querySelector('#global-container');
        this.eventType = this._getEventType();
        this._addEvent();
    }

    _getEventType() {
        return window.ontouchstart ? 'touchstart' : 'click';
    }

    _toggle() {
        this.DOM.container.classList.toggle('menu-open');
    }

    _addEvent() {
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.main1.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.main2.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.main3.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.main4.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.main5.addEventListener(this.eventType, this._toggle.bind(this));
    }
}
