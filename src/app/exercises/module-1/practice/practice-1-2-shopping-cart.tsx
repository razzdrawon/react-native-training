import ExerciseWrapper from '../../../components/shared/ExerciseWrapper';
import ExerciseInstructions from '../../../components/shared/ExerciseInstructions';
import Card from '../../../components/shared/Card';

/**
 * Practice 1-2: Shopping Cart
 * 
 * This is a practice exercise where you'll build a shopping cart application
 * using state management concepts from Module 1.
 * 
 * TODO: Implement a shopping cart with:
 * - Add items to cart
 * - Remove items from cart
 * - Update item quantities
 * - Calculate total price
 * - Use Zustand or Context API for global state
 */

export default function Practice12ShoppingCart() {
  return (
    <ExerciseWrapper
      title="Practice 1-2: Shopping Cart"
      description="Build a shopping cart application with state management"
    >
      <ExerciseInstructions
        title="Shopping Cart Practice"
        description="In this practice, you'll build a shopping cart using state management tools from Module 1."
        objectives={[
          'Create a product catalog',
          'Implement add to cart functionality',
          'Manage cart state (add, remove, update quantity)',
          'Calculate cart totals',
          'Use Zustand or Context API for cart state',
        ]}
        steps={[
          'Set up product data structure',
          'Create cart state management',
          'Implement add/remove/update functionality',
          'Calculate totals and display cart',
          'Style and polish the UI',
        ]}
      />

      <Card title="Your Shopping Cart">
        <p style={{ color: '#666', marginBottom: '1rem' }}>
          Implement your shopping cart here. This is a practice exercise where you apply
          state management concepts from Module 1.
        </p>
        {/* TODO: Implement your shopping cart here */}
      </Card>
    </ExerciseWrapper>
  );
}

