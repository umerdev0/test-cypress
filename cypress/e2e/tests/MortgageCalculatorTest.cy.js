import MortgageCalculatorPage from "../pages/MortgageCalculatorPage";

   const mortgageCalPage = new MortgageCalculatorPage

  describe('Test MortgageCaclulator', () => {
      beforeEach(() => {
        mortgageCalPage.visitMortgageCalculatorPage();
      });

      it('verifies Monthly Principal & Interes | Total Monthly Payments ', () => {
        mortgageCalPage.verfiyMortgageCaclulator();
      });


  });
