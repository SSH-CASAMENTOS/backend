import { Wedding, WeddingProps } from '../../../entities/wedding.entity';

export class WeddingDataBuilder {
  static defaultProps: WeddingProps = {
    title: 'João & Maria',
    date: new Date('2025-12-31'),
    location: 'Beautiful Garden',
    clientNames: 'João Silva & Maria Santos',
    status: 'upcoming',
    budget: 50000,
    totalPaid: 10000,
    coverImage: 'https://example.com/cover.jpg',
  };

  private props: WeddingProps;

  private constructor() {
    this.props = { ...WeddingDataBuilder.defaultProps };
  }

  static aWedding() {
    return new WeddingDataBuilder();
  }

  withTitle(title: string) {
    this.props.title = title;
    return this;
  }

  withDate(date: Date) {
    this.props.date = date;
    return this;
  }

  withLocation(location: string) {
    this.props.location = location;
    return this;
  }

  withClientNames(clientNames: string) {
    this.props.clientNames = clientNames;
    return this;
  }

  withStatus(status: 'upcoming' | 'completed' | 'canceled') {
    this.props.status = status;
    return this;
  }

  withBudget(budget: number) {
    this.props.budget = budget;
    return this;
  }

  withTotalPaid(totalPaid: number) {
    this.props.totalPaid = totalPaid;
    return this;
  }

  withCoverImage(coverImage: string) {
    this.props.coverImage = coverImage;
    return this;
  }

  withCreatedAt(date: Date) {
    this.props.createdAt = date;
    return this;
  }

  withUpdatedAt(date: Date) {
    this.props.updatedAt = date;
    return this;
  }

  build(): Wedding {
    return new Wedding(this.props);
  }
}
