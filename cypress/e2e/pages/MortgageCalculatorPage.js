import { MORTAGAGE_CALCULATOR_DATA } from '../resources/TestData'

/**
 * Represents a DOC Common page methods.
 */
class MortgageCalculatorPage {
    constructor() {
        this.mortgageCalculatorPageURL = "/mortgages/mortgage-calculator";
        this.calculatorCommonSelectors = {
            mortgageTermSelector: '.stepper-content',
            totalMonthlyPayments: '._3Ku8iN._298zm0 > ._2Sit1B',
        };
    }

    visitMortgageCalculatorPage() {
        cy.visit(this.mortgageCalculatorPageURL);
        cy.url().should('include', 'mortgage-calculator');
        cy.log("Visited Mortgage Calculator Page page with URL" + this.mortgageCalculatorPageURL);
    }

    enterCalculatorValue(name, value) {
        cy.get("span").contains(name).parent().siblings('input')
        .should('be.visible')
        .clear()
        .type(value);
    }

    enterMortagageTerm(value) {
        cy.get(this.calculatorCommonSelectors.mortgageTermSelector)
            .should('be.visible')
            .clear()
            .type(value).blur();
    }

    verfiyMortgageCaclulator() {
        MORTAGAGE_CALCULATOR_DATA.input_values.forEach((input) => {
            this.enterCalculatorValue(input.label, input.value)
        })

        this.enterMortagageTerm(MORTAGAGE_CALCULATOR_DATA.mortgageTerm);

        this.verfiyTotalMonthlyPayments();
        this.verifyPrincipalInterest();
    }

    verfiyTotalMonthlyPayments() {
        cy.get(this.calculatorCommonSelectors.totalMonthlyPayments)
            .should('be.visible')
            .should('have.text', MORTAGAGE_CALCULATOR_DATA.results.totalMonthlyPayments.value);
    }

    verifyPrincipalInterest(){
        cy.get("span").contains(MORTAGAGE_CALCULATOR_DATA.results.principalAndInterest.label).parent().siblings('div').find('span')
        .should('be.visible')
        .should('have.text', MORTAGAGE_CALCULATOR_DATA.results.principalAndInterest.value);
    }
}
export default MortgageCalculatorPage;
