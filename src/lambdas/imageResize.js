exports.handler = async event => {
  // Placeholder behavior keeps Lambda module importable without native image dependencies.
  return { sourcePath: event.sourcePath, requestedWidth: Number(event.width || 4096), requestedHeight: Number(event.height || 4096) };
};
