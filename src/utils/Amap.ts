interface LngLatAddressRes {
  longitude: number | string;
  latitude: number | string;
  address: string;
  province?: string;
  city?: string;
  district?: string;
}

/**
 * 获取经纬度、详细地址
 * @returns
 */
export function getLngLatAddress(): Promise<LngLatAddressRes> {
  return new Promise((resolve, reject) => {
    uni.getLocation({
      type: 'gcj02',
      geocode: true,
      altitude: false,
      success(res) {
        const { longitude, latitude, address } = res;
        // app平台可以直接获取address

        resolve({
          longitude,
          latitude,
          address
        });
      },
      fail(error) {
        console.error('getLngLatAddress getLocation fail', error);
        reject(error);
      }
    });
  });
}
