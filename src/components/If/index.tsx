import React from 'react';

export const If = ({
  condition,
  render = null,
  children = null,
  renderElse = null
}: {
  condition: boolean;
  children?: React.ReactNode;
  render?: React.ReactNode;
  renderElse?: React.ReactNode;
}) => {
  if (condition) {
    return render || children || null;
  }
  return renderElse || null;
};
