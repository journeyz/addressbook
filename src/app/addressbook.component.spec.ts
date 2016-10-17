import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AddressbookAppComponent } from '../app/addressbook.component';

beforeEachProviders(() => [AddressbookAppComponent]);

describe('App: Addressbook', () => {
  it('should create the app',
      inject([AddressbookAppComponent], (app: AddressbookAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'addressbook works!\'',
      inject([AddressbookAppComponent], (app: AddressbookAppComponent) => {
    expect(app.title).toEqual('addressbook works!');
  }));
});
