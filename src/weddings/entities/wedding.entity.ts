import { Entity } from '@/shared/domain/entities/entity';

export type WeddingStatus = 'upcoming' | 'completed' | 'canceled';

export interface WeddingProps {
  title: string;
  date: Date;
  location: string;
  clientNames: string;
  status: WeddingStatus;
  budget: number;
  totalPaid: number;
  coverImage?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Wedding extends Entity<WeddingProps> {
  constructor(props: WeddingProps, id?: string) {
    props.createdAt = props.createdAt ?? new Date();
    props.updatedAt = props.updatedAt ?? props.createdAt;
    super(props, id);
  }

  // Getters
  get title() { return this.props.title; }
  get date() { return this.props.date; }
  get location() { return this.props.location; }
  get clientNames() { return this.props.clientNames; }
  get status() { return this.props.status; }
  get budget() { return this.props.budget; }
  get totalPaid() { return this.props.totalPaid; }
  get coverImage() { return this.props.coverImage; }
  get createdAt() { return this.props.createdAt; }
  get updatedAt() { return this.props.updatedAt; }

  // Methods
  add(): Wedding {
    if (this.props.status !== 'upcoming') {
      throw new Error('Only upcoming weddings can be added');
    }
    return new Wedding(this.props, this.id);
  }

  edit(updates: Partial<WeddingProps>): Wedding {
    if (this.props.status === 'canceled') {
      throw new Error('Cannot edit a canceled wedding');
    }

    return new Wedding(
      {
        ...this.props,
        ...updates,
        updatedAt: new Date()
      },
      this.id
    );
  }

  cancel(): Wedding {
    if (this.props.status === 'completed') {
      throw new Error('Cannot cancel a completed wedding');
    }

    return new Wedding(
      {
        ...this.props,
        status: 'canceled',
        updatedAt: new Date()
      },
      this.id
    );
  }

  complete(): Wedding {
    if (this.props.status === 'canceled') {
      throw new Error('Cannot complete a canceled wedding');
    }

    if (this.props.date > new Date()) {
      throw new Error('Cannot complete a wedding before its date');
    }

    return new Wedding(
      {
        ...this.props,
        status: 'completed',
        updatedAt: new Date()
      },
      this.id
    );
  }

  updatePayment(amount: number): Wedding {
    if (amount < 0) {
      throw new Error('Payment amount cannot be negative');
    }

    const newTotalPaid = this.props.totalPaid + amount;
    if (newTotalPaid > this.props.budget) {
      throw new Error('Total paid cannot exceed budget');
    }

    return new Wedding(
      {
        ...this.props,
        totalPaid: newTotalPaid,
        updatedAt: new Date()
      },
      this.id
    );
  }

  static validate(props: WeddingProps): void {
    if (!props.title?.trim()) {
      throw new Error('Wedding title is required');
    }
    if (!props.date) {
      throw new Error('Wedding date is required');
    }
    if (!props.location?.trim()) {
      throw new Error('Wedding location is required');
    }
    if (!props.clientNames?.trim()) {
      throw new Error('Client names are required');
    }
    if (props.budget < 0) {
      throw new Error('Budget cannot be negative');
    }
    if (props.totalPaid < 0) {
      throw new Error('Total paid cannot be negative');
    }
    if (props.totalPaid > props.budget) {
      throw new Error('Total paid cannot exceed budget');
    }
  }

  static create(props: WeddingProps, id?: string): Wedding {
    Wedding.validate(props);
    return new Wedding(props, id);
  }
}
