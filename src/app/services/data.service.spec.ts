import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getSimpleData()', () => {
    it('should return an array of simple data', () => {
      const result = service.getSimpleData();
      expect(result).toBeTruthy();
      expect(result.length).toBeGreaterThan(0);
      expect(result[0].country).toBe('USA');
    });
  });

  describe('getMultiData()', () => {
    it('should return an array of multi data', () => {
      const result = service.getMultiData();
      expect(result).toBeTruthy();
      expect(result.length).toBeGreaterThan(0);
      expect(result[0].year).toBe('2019');
    });
  });
});
