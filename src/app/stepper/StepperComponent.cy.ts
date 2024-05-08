import { mount } from "cypress/angular";
import { StepperComponent } from "./stepper.component"

describe('StepperComponent', () => {

  beforeEach(() => {
      mount(StepperComponent)
  });

  it('mounts', () => {
    cy.mount(StepperComponent)
  });

  it('should the counter start at 0', () => {
    cy.get('[data-cy=count]').should('have.text', 'Current Count: 0')
  });

  it('should increment when click + button', () => {
    cy.get('[data-cy=increment]').click()
    cy.get('[data-cy=count]').should('have.text', 'Current Count: 1')
  });

  it('should decrement when click - button', () => {
    cy.get('[data-cy=decrement]').click()
    cy.get('[data-cy=count]').should('have.text', 'Current Count: -1')
  });
});