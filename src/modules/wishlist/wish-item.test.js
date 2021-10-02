import { render, screen } from '@testing-library/react';
import WishItem from './wish-item';
import coffees from '../../coffees.json';

test('renders add to wish list button', () => {
    const item = coffees[0];
    const { skuBase, image, name } = item;
    const { grind, size, } = item.variants;
    const { getByText } = render(<WishItem  skuBase={skuBase} image={image} name={name} grind={grind} size={size} />);

    const linkElement = getByText('Add to wish list');

    expect(linkElement).toBeInTheDocument();
});

test('renders title', () => {
    const item = coffees[0];
    const { skuBase, image, name } = item;
    const { grind, size, } = item.variants;
    const { getByText } = render(<WishItem  skuBase={skuBase} image={image} name={name} grind={grind} size={size} />);

    const linkElement = getByText(name);

    expect(linkElement).toBeInTheDocument();
});
