# GeoLocation from MongoDB

## Overview

Whenever user searches a product for specific location, the system will use GeoLocation MongoDB to filter products for that area. If the coordinates are not caches, then get the coordinates from Google.

## What is GeoLocation MongoDB?

MongoDB supports query operations on geospatial data. This section introduces MongoDB's geospatial features.
In MongoDB, you can store geospatial data as GeoJSON objects or as legacy coordinate pairs.

## GeoJSON Objects

To calculate geometry over an Earth-like sphere, store your location data as GeoJSON objects.

- field_name: { type: GeoJSON_type , coordinates: coordinates_var }

Example:

```jsx
location: {
    type: “Point”,
    coordinates: [ 23.42442, -23.43422 ]
}

location: {
    type: “Point”,
    coordinates: { longitude: 23.42442, latitude: -23.43422 }
}
```

#### GeoJSON types:

- Point
- LineString
- Polygon
- MultiPoint
- MultiLineString
- MultiPolygon
- GeometryCollection

## Geospatial Indexes

- 2dsphere indexes support queries that calculate geometries on an earth-like sphere.

- 2d indexes support queries that calculate geometries on a two-dimensional plane. Although the index can support $nearSphere queries that calculate on a sphere, if possible, use the 2dsphere index for spherical queries.

- You cannot use a geospatial index as a shard key when sharding a collection. However, you can create a geospatial index on a sharded collection by using a different field as the shard key.
  The following geospatial operations are supported on sharded collections:
  - $geoNear aggregation stage
  - $near and $nearSphere query operators

## Geospatial Query Operators

MongoDB provides the following geospatial query operators:

- <b>$geoIntersects:</b> Selects geometries that intersect with a GeoJSON geometry. The 2dsphere index supports $geoIntersects.
- <b>$geoWithin:</b> Selects geometries within a bounding GeoJSON geometry. The 2dsphere and 2d indexes support $geoWithin.
- <b>$near:</b> Returns geospatial objects in proximity to a point. Requires a geospatial index. The 2dsphere and 2d indexes support $near.
- <b>$nearSphere:</b> Returns geospatial objects in proximity to a point on a sphere. Requires a geospatial index. The 2dsphere and 2d indexes support $nearSphere.

#### Example

The following operation creates a 2dsphere index on the location field:

```jsx
db._name_.createIndex({ location: "2dsphere" });
```

The places collection above has a 2dsphere index. The following query uses the $near operator to return documents that are at least 1000 meters from and at most 5000 meters from the specified GeoJSON point, sorted in order from nearest to farthest:

```jsx
db._name__.find({
  location: {
    $near: {
      $geometry: { type: "Point", coordinates: [-73.9667, 40.78] },
      $minDistance: 1000,
      $maxDistance: 5000,
    },
  },
});
```

The following operation uses the $geoNear aggregation operation to return documents that match the query filter { category: "Parks" }, sorted in order of nearest to farthest to the specified GeoJSON point:

```jsx
db._name__.aggregate([
  {
    $geoNear: {
      near: { type: "Point", coordinates: [-73.9667, 40.78] },
      spherical: true,
      query: { category: "Parks" },
      distanceField: "calcDistance",
    },
  },
]);
```

#### reference links

- https://www.mongodb.com/docs/manual/geospatial-queries/#std-label-geospatial-legacy
- https://www.mongodb.com/docs/manual/reference/geojson/#std-label-geojson-point
- https://www.mongodb.com/docs/manual/tutorial/geospatial-tutorial/
- https://www.mongodb.com/docs/manual/reference/operator/query-geospatial/
