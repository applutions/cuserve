import { CompanylistModule } from './companylist.module';

describe('CompanylistModule', () => {
  let companylistModule: CompanylistModule;

  beforeEach(() => {
    companylistModule = new CompanylistModule();
  });

  it('should create an instance', () => {
    expect(companylistModule).toBeTruthy();
  });
});
