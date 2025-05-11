import { Wedding, WeddingProps } from '../../wedding.entity';
import { WeddingDataBuilder } from '../../../domain/testing/helpers/wedding-data-builder';

describe('Wedding Entity Unit Tests', () => {
  let wedding: Wedding;
  let props: WeddingProps;

  beforeEach(() => {
    props = {
      title: 'João & Maria',
      date: new Date('2025-12-31'),
      location: 'Beautiful Garden',
      clientNames: 'João Silva & Maria Santos',
      status: 'upcoming',
      budget: 50000,
      totalPaid: 10000,
      coverImage: 'https://example.com/cover.jpg',
    };

    wedding = new Wedding(props);
  });

  it('should create a valid wedding', () => {
    expect(wedding.id).toBeDefined();
    expect(wedding.title).toBe(props.title);
    expect(wedding.date).toBe(props.date);
    expect(wedding.location).toBe(props.location);
    expect(wedding.clientNames).toBe(props.clientNames);
    expect(wedding.status).toBe(props.status);
    expect(wedding.budget).toBe(props.budget);
    expect(wedding.totalPaid).toBe(props.totalPaid);
    expect(wedding.coverImage).toBe(props.coverImage);
    expect(wedding.createdAt).toBeDefined();
    expect(wedding.updatedAt).toBeDefined();
  });

  it('should create a wedding without optional fields', () => {
    const minimalProps = {
      title: props.title,
      date: props.date,
      location: props.location,
      clientNames: props.clientNames,
      status: props.status,
      budget: props.budget,
      totalPaid: props.totalPaid,
    };

    const minimalWedding = new Wedding(minimalProps);

    expect(minimalWedding.id).toBeDefined();
    expect(minimalWedding.coverImage).toBeUndefined();
    expect(minimalWedding.createdAt).toBeDefined();
    expect(minimalWedding.updatedAt).toBeDefined();
  });

  describe('add method', () => {
    it('should add an upcoming wedding', () => {
      const result = wedding.add();
      expect(result).toBeInstanceOf(Wedding);
      expect(result.id).toBe(wedding.id);
    });

    it('should throw error when adding a non-upcoming wedding', () => {
      const completedWedding = new Wedding({ ...props, status: 'completed' });
      expect(() => completedWedding.add()).toThrow('Only upcoming weddings can be added');
    });
  });

  describe('edit method', () => {
    it('should edit wedding properties', () => {
      const updates = {
        title: 'New Title',
        location: 'New Location',
      };

      const result = wedding.edit(updates);

      expect(result).toBeInstanceOf(Wedding);
      expect(result.title).toBe(updates.title);
      expect(result.location).toBe(updates.location);
      expect(result.updatedAt).not.toBe(wedding.updatedAt);
    });

    it('should throw error when editing a canceled wedding', () => {
      const canceledWedding = new Wedding({ ...props, status: 'canceled' });
      expect(() => canceledWedding.edit({ title: 'New Title' })).toThrow('Cannot edit a canceled wedding');
    });
  });

  describe('cancel method', () => {
    it('should cancel an upcoming wedding', () => {
      const result = wedding.cancel();
      expect(result).toBeInstanceOf(Wedding);
      expect(result.status).toBe('canceled');
      expect(result.updatedAt).not.toBe(wedding.updatedAt);
    });

    it('should throw error when canceling a completed wedding', () => {
      const completedWedding = new Wedding({ ...props, status: 'completed' });
      expect(() => completedWedding.cancel()).toThrow('Cannot cancel a completed wedding');
    });
  });

  describe('complete method', () => {
    it('should complete an upcoming wedding after its date', () => {
      const pastWedding = new Wedding({
        ...props,
        date: new Date('2024-12-31'),
      });

      const result = pastWedding.complete();
      expect(result).toBeInstanceOf(Wedding);
      expect(result.status).toBe('completed');
      expect(result.updatedAt).not.toBe(wedding.updatedAt);
    });

    it('should throw error when completing a canceled wedding', () => {
      const canceledWedding = new Wedding({ ...props, status: 'canceled' });
      expect(() => canceledWedding.complete()).toThrow('Cannot complete a canceled wedding');
    });

    it('should throw error when completing a wedding before its date', () => {
      const futureWedding = new Wedding({
        ...props,
        date: new Date('2026-12-31'),
      });

      expect(() => futureWedding.complete()).toThrow('Cannot complete a wedding before its date');
    });
  });

  describe('updatePayment method', () => {
    it('should update total paid amount', () => {
      const amount = 5000;
      const result = wedding.updatePayment(amount);

      expect(result).toBeInstanceOf(Wedding);
      expect(result.totalPaid).toBe(props.totalPaid + amount);
      expect(result.updatedAt).not.toBe(wedding.updatedAt);
    });

    it('should throw error when payment amount is negative', () => {
      expect(() => wedding.updatePayment(-1000)).toThrow('Payment amount cannot be negative');
    });

    it('should throw error when total paid would exceed budget', () => {
      expect(() => wedding.updatePayment(41000)).toThrow('Total paid cannot exceed budget');
    });
  });

  describe('validation', () => {
    it('should throw error when title is empty', () => {
      expect(() => Wedding.create({ ...props, title: '' })).toThrow('Wedding title is required');
    });

    it('should throw error when date is missing', () => {
      expect(() => Wedding.create({ ...props, date: null })).toThrow('Wedding date is required');
    });

    it('should throw error when location is empty', () => {
      expect(() => Wedding.create({ ...props, location: '' })).toThrow('Wedding location is required');
    });

    it('should throw error when client names are empty', () => {
      expect(() => Wedding.create({ ...props, clientNames: '' })).toThrow('Client names are required');
    });

    it('should throw error when budget is negative', () => {
      expect(() => Wedding.create({ ...props, budget: -1 })).toThrow('Budget cannot be negative');
    });

    it('should throw error when total paid is negative', () => {
      expect(() => Wedding.create({ ...props, totalPaid: -1 })).toThrow('Total paid cannot be negative');
    });

    it('should throw error when total paid exceeds budget', () => {
      expect(() => Wedding.create({ ...props, budget: 1000, totalPaid: 2000 }))
        .toThrow('Total paid cannot exceed budget');
    });
  });
});
