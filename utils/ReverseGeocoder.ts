export async function reverseGeocode(
  lat: number,
  lng: number
): Promise<{ placeName: string | null; country: string | null }> {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;

  const response = await fetch(url, {
    headers: {
      'User-Agent': 'the-discovery-panel (lizzielerwill@gmail.com)',
    },
  });

  if (!response.ok) {
    console.warn('Failed to reverse geocode:', response.statusText);
    return { placeName: null, country: null };
  }

  const data = await response.json();

  const address = data.address ?? null;
  if (!address) {
    console.warn('No address found for coordinates:', lat, lng);
    return { placeName: null, country: null };
  }

  const placeName =
    address.city ??
    address.town ??
    address.village ??
    address.hamlet ??
    address.neighbourhood ??
    address.county ??
    null;

  const country = address.country ?? null;

  return { placeName, country };
}
